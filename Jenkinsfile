pipeline {
    agent any
    environment {
    PATH = "/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Applications/Docker.app/Contents/Resources/bin/:/Users/saikiranreddy/Library/Group\\ Containers/group.com.docker/Applications/Docker.app/Contents/Resources/bin:/usr/local/bin/docker-compose:/usr/local/bin"
    IMAGE_NAME = "saikiran27/java-flamup"
    IMAGE_TAG = "latest"
    }
    

    stages {
        stage("Sonarqube Quality check") {
            steps {
                sh 'docker pull openjdk:11'
                sh 'mvn clean package'
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
                withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'saikiran27_password', usernameVariable: 'saikiran27_username')]) {
                sh "docker login -u ${saikiran27_username} -p ${saikiran27_password}"
                }
                sh "docker push saikiran27/java-flamup:latest"
            }
        }
    }
}
