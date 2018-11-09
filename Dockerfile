FROM trellisldp/trellis-ext-db:latest

# Our configured repackaging of the upstream container
LABEL maintainer="SUL Infrastructure Team <dlss-infrastructure-team@lists.stanford.edu>"

COPY config/trellis.yml /opt/trellis/etc/config.yml
