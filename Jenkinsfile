
pipeline {
    agent any // This tells Jenkins to run this pipeline on any available agent

    environment {
        // Define environment variables here
        MY_ENV_VAR = 'SomeValues'
    }

    stages {
        stage('Build') {
            steps {
                // Commands for building the project
                echo 'Building...'
                // For example, you might use Maven to build a Java project:
                // sh 'mvn clean package'
            }
        }

        stage('Test') {
            steps {
                // Commands for testing the project
                echo 'Testing...'
                // For example, you might run unit tests with Maven:
                // sh 'mvn test'
            }
        }
    }

    post {
        always {
            // Commands that are always executed after the pipeline runs
            echo 'This will always run.'
        }
        success {
            // Commands that are executed if the pipeline succeeds
            echo 'Build succeeded!'
        }
        failure {
            // Commands that are executed if the pipeline fails
            echo 'Build failed!'
        }
        unstable {
            // Commands that are executed if the pipeline is unstable
            echo 'Build is unstable!'
        }
        changed {
            // Commands that are executed only if the pipeline result changed
            // e.g., from success to failure or failure to success
            echo 'Build status changed!'
        }
    }
}
