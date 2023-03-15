pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'export PATH=$PATH:/usr/local/bin'
                sh 'docker compose build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'export PATH=$PATH:/usr/local/bin'
                sh 'docker compose up'
            }
        }
    }
}
