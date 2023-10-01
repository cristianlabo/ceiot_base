docker rm $(docker ps -a | grep mongo | cut -c 1-15)
docker volume rm $(docker volume ls | grep local | sed 's,local, ,g')
