pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker compose version'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker-compose --version'
            }
        }
    }
}
