#!/bin/bash

max_tries=10
sleep_time=10
healthy_status="healthy"
container_name="trellis_server"

status=`docker inspect --format='{{.State.Health.Status}}' $container_name`
tries=0
until [ $status == $healthy_status ] || [ $tries -ge $max_tries ]
do
    tries=$(( tries+1 ))
    echo "try $tries, status is $status"
    status=`docker inspect --format='{{.State.Health.Status}}' $container_name`
    sleep $sleep_time
done

if [ $status == $healthy_status ]
then
    echo "SUCCESS. status is $status"
    exit 0
fi

echo "FAILURE. status is $status"
exit 1

