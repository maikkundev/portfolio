ARG GO_VERSION=1
FROM golang:${GO_VERSION}-bookworm as builder

WORKDIR /usr/src/app
COPY go.mod ./
RUN go mod download && go mod verify
COPY . .
RUN go build -v -o /run-app .


FROM debian:bookworm
WORKDIR /usr/local/bin

COPY --from=builder /run-app /usr/local/bin/
COPY --from=builder /usr/src/app/projects.json /usr/local/bin/
COPY --from=builder /usr/src/app/templates /usr/local/bin/templates

CMD ["run-app"]
