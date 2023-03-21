pipeline {
    agent any
    environment {
    PATH = "/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Applications/Docker.app/Contents/Resources/bin/:/Users/saikiranreddy/Library/Group\\ Containers/group.com.docker/Applications/Docker.app/Contents/Resources/bin:/usr/local/bin/docker-compose:/usr/local/bin"
    IMAGE_NAME = "saikiran27/java-flamup"
    IMAGE_TAG = "latest"
    }
    

    stages {
        stage("Sonarqube Quality check") {
            agent {
                docker {
                    image 'sonarqube:lts'
                }
            }
            steps {
                script {
                    withsonarQubeEnv(credentialsId:'sonarqube') {
                        sh 'chmod +x mvn sonar:sonar'
                    }
                }
            }
        } // close Sonarqube Quality check stage here
        
        stage('Build') {
            steps {
                sh 'docker compose build'
            }
        }
        
        stage('Push image') {
            steps {
                sh "docker tag java-flamup:latest saikiran27/java-flamup:latest"
                withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'Saikiran@2710', usernameVariable: 'saikiran27')]) {
                    sh "docker login -u ${DOCKERHUB_USERNAME} -p ${DOCKERHUB_PASSWORD}"
                }
                sh "docker push saikiran27/java-flamup:latest"
            }
        }
    }
}
