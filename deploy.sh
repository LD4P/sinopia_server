# Exit script if a statement returns a non-true return value.
set -o errexit
# Use the error status of the first failure, rather than that of the last item in a pipeline.
set -o pipefail

unset AWS_SESSION_TOKEN
# Need to provide your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY via ENV when executing this script.
temp_creds=$(aws sts assume-role --role-session-name DevelopersRole --role-arn arn:aws:iam::418214828013:role/DevelopersRole | jq .Credentials )
export AWS_ACCESS_KEY_ID=$(echo "$temp_creds" | jq .AccessKeyId | xargs)
export AWS_SECRET_ACCESS_KEY=$(echo "$temp_creds" | jq .SecretAccessKey | xargs)
export AWS_SESSION_TOKEN=$(echo "$temp_creds" | jq .SessionToken | xargs)
aws configure list

# Fetch the config file that the Dockerfile will copy into the container
aws s3 cp s3://sinopia-config/development/config/trellis.yml config/trellis.yml
docker build -t sinopia/trellis:latest .
$(aws ecr get-login --no-include-email --region us-west-2)
docker tag sinopia/trellis 418214828013.dkr.ecr.us-west-2.amazonaws.com/sinopia
docker push 418214828013.dkr.ecr.us-west-2.amazonaws.com/sinopia
