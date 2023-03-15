pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'export PATH=$PATH:/usr/local/bin'
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
