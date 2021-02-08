FROM gitpod/workspace-full:latest
LABEL maintainer="contact@edukera.com"
RUN sudo apt-get update && sudo apt-get -y install wget netbase
RUN npm i @completium/completium-cli@0.0.4 -g
RUN wget -q https://raw.githubusercontent.com/edukera/completium-dapp-utils/master/admin.json
RUN completium-cli init
RUN completium-cli update binaries
RUN completium-cli generate account admin --from-faucet admin.json
RUN completium-cli set account admin
RUN sudo ln -s /home/gitpod/.completium/bin/archetype /usr/local/bin/