# Pull Base image
FROM tomcat:8.0

# Mainataining
MAINTAINER "satpalsingh101070@gmail.com"

# copy war file onto conatiner
COPY ./target/DevOpsMinproject.war /usr/local/tomcat/webapps
