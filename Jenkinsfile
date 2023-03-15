pipeline {
    agent any
    environment {
    PATH = "/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Applications/Docker.app/Contents/Resources/bin/:/Users/saikiranreddy/Library/Group\\ Containers/group.com.docker/Applications/Docker.app/Contents/Resources/bin:/usr/local/bin/docker-compose:/usr/local/bin"
}

    stages {
        stage('Build') {
            steps {
                sh 'docker compose build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker compose up'
            }
        }
    }
}
