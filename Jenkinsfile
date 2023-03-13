Pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker-compose build'
        }
    }
    stage('deploy'){
        steps {
            sh 'docker-compose up -d'
            sh 'sleep 100'
            sh 'psql -h 127.0.0.1 -d flamup -p 5432 -U postgres -c "\copy clothes FROM 'data2.csv' DELIMITER ',' CSV;" <<< postgres'


        }

    }
}
