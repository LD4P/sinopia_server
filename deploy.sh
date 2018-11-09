# Need to provide your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY via ENV when executing this script.
temp_creds=$(aws sts assume-role --role-session-name DevelopersRole --role-arn arn:aws:iam::418214828013:role/DevelopersRole | jq .Credentials )
export AWS_ACCESS_KEY_ID=$(echo "$temp_creds" | jq .AccessKeyId | xargs)
export AWS_SECRET_ACCESS_KEY=$(echo "$temp_creds" | jq .SecretAccessKey | xargs)
export AWS_SESSION_TOKEN=$(echo "$temp_creds" | jq .SessionToken | xargs)
aws configure list

$(aws ecr get-login --no-include-email --region us-west-2)
docker tag sinopia/trellis 418214828013.dkr.ecr.us-west-2.amazonaws.com/sinopia
docker push 418214828013.dkr.ecr.us-west-2.amazonaws.com/sinopia
