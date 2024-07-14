node{
    def dockerImage
    stage('Checkout')
    {
        git 'https://github.com/KartikeyVarshney/node_pipeline.git'
    }
    stage('Build Docker Image')
    {
        dockerImage = docker.build('node-app' , '.')
    }
    stage('Deploy')
    {
        dockerImage.run('-p 5000:5000 --rm')
    }
    post{
        success{
            echo 'Pipeline succedded! Deployment complete.'
        }
        failure
        {
            echo 'Pipeline failed! Deployment unsuccessful.'
        }
    }
}
