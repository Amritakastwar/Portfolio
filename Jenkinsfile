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
        // Replace with your testing command, if applicable
        // sh 'npm test'
      }
    }
    stage('Deploy or Preview') {
      steps {
        echo 'Add deploy or preview steps here'
      }
    }
  }
}
