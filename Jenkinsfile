pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test (Optional)') {
            steps {
                echo 'No tests defined yet'  // Previously empty, now valid
            }
        }

        stage('Deploy or Preview') {
            steps {
                echo 'Deploy step placeholder'
            }
        }
    }
}

