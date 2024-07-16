package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"
	"path/filepath"
)

type Project struct {
	Title       string `json:"Title"`
	Description string `json:"Description"`
	GitHubLink  string `json:"GitHubLink"`
}

type PageData struct {
	Title    string
	Projects []Project
}

func LoadProjects(filename string) ([]Project, error) {
	file, err := os.Open(filename)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	var projects []Project
	if err := json.NewDecoder(file).Decode(&projects); err != nil {
		return nil, err
	}
	return projects, nil
}

func render(w http.ResponseWriter, tmpl string, data interface{}) {
	templates, err := template.ParseFiles(
		filepath.Join("templates", "layout.html"),
		filepath.Join("templates", tmpl+".html"),
	)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	err = templates.ExecuteTemplate(w, "layout.html", data)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func main() {
	router := http.NewServeMux()

	router.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	router.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		projects, err := LoadProjects("projects.json")
		if err != nil {
			http.Error(w, "Could not load projects from projects.json", http.StatusInternalServerError)
			return
		}
		data := PageData{Title: "Home", Projects: projects}
		render(w, "index", data)
	})

	fmt.Println("listening on :8080")
	log.Fatal(http.ListenAndServe(":8080", router))
}
