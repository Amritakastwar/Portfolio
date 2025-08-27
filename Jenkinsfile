pipeline {
    agent any   

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Amritakastwar/Portfolio.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                sh 'echo "Deploying to server..."'

            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed!'
        }
    }
}


