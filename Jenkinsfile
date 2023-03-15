pipeline {
    agent any
    environment {
    PATH = "/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Applications/Docker.app/Contents/Resources/bin/:/Users/saikiranreddy/Library/Group\\ Containers/group.com.docker/Applications/Docker.app/Contents/Resources/bin:/usr/local/bin/docker-compose:/usr/local/bin"
    IMAGE_NAME = "saikiran27/java-flamup"
    IMAGE_TAG = "latest"
    }

    stages {
        stage('Build') {
            steps {
                sh 'docker compose build'
            }
        }
         stage('Push image') {
            steps {
                sh "docker tag flamup:latest saikiran27/flamup:latest"
                withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USERNAME')]) {
                    sh "docker login -u ${DOCKERHUB_USERNAME} -p ${DOCKERHUB_PASSWORD}"
                }
                sh "docker push saikiran27/flamup:latest"
            }
        }
    }
}
