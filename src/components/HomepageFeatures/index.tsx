import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

type FeatureItem = {
  title: string;
  link: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "StartDailyToDo",
    link: "https://github.com/maikkundev/StartDailyToDo",
    description: (
      <>
        Start is a simple web application for organizing your everyday tasks.
        Start is being built with NextJS for the Front-end, Go for the back-end
        and SQLite as its database.
      </>
    ),
  },
  {
    title: "Simple Data Visualization Web App",
    link: "https://github.com/maikkundev/soft-tech-project-2024/",
    description: (
      <>
        As part of the <b>Software Technology</b> course at Ionian University,
        my project's classmates and I developed this simple data visualization
        web app. This web app was made in Python using Streamlit and Pandas.
      </>
    ),
  },
  {
    title: "Simple Search Engine",
    link: "https://github.com/actuallylost/inf-retrieval-2024",
    description: (
      <>
        As part of the <b>Information Retrieval</b> course at Ionian University,
        my classmate and I developed this simple search engine web app. This web
        app was made in Python using Streamlit.
      </>
    ),
  },
];

function Feature({ title, link, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="padding-horiz--md">
        <Heading
          as="h3"
          className="text-xl font-semibold flex justify-between items-center"
        >
          {title}
          <a href={link} target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Heading>

        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
