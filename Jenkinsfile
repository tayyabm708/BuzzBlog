pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'buzzblog-app'
        CONTAINER_NAME = 'buzzblog-container'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/tayyabm708/BuzzBlog.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Stop Existing Container') {
            steps {
                sh """
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                """
            }
        }

        stage('Run New Container') {
            steps {
                sh """
                docker run -d --name $CONTAINER_NAME -p 3000:3000 $DOCKER_IMAGE
                """
            }
        }

        stage('Health Check') {
            steps {
                sh 'sleep 10' // wait for the container to spin up
                sh 'curl -f http://localhost:3000 || exit 1'
            }
        }

        stage('Selenium Testing') {
            steps {
                dir('selenium-tests') {
                sh 'npm install'
                sh 'node test_login.js'
            }
        }
    }

    }
}
