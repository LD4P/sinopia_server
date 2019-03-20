#!/usr/bin/env bash

curl -i -X PUT --data-binary @fixtures/base-container.jsonld -H "Content-Type:application/ld+json" http://localhost:8080/

sleep 1
echo ""
curl -i -H "Accept:application/ld+json" http://localhost:8080/

sleep 1
echo ""
curl -i -X PUT --data-binary @fixtures/repository-container.jsonld -H 'Link: <http://www.w3.org/ns/ldp#BasicContainer>; rel="type"' -H "Content-Type:application/ld+json" http://localhost:8080/repository

sleep 1
echo ""
curl -i -H "Accept:application/ld+json" http://localhost:8080/repository

sleep 1
echo ""
curl -i -X POST --data-binary @fixtures/group_defs/ld4p.jsonld -H 'Link: <http://www.w3.org/ns/ldp#BasicContainer>; rel="type"' -H "Content-Type:application/ld+json" -H "Slug:ld4p" http://localhost:8080/repository -u cmharlow:S3cr3t!

sleep 1
echo ""
curl -i -H "Accept:application/ld+json" http://localhost:8080/repository/ld4p

sleep 1
echo ""

rtDir='fixtures/profile_defs/bibframe'

for F in `ls $rtDir/*.json`; do
  rt=`(echo $F | cut -f 1 -d '.')`
  curl -i -X POST --data-binary @$F -H "Slug: $(basename $rt)" -H 'Link: <http://www.w3.org/ns/ldp#NonRDFSource>; rel="type"' -H "Content-Type: application/json" http://localhost:8080/repository/ld4p -u 'suntzu:S6ntz6?'
  sleep 1
  curl -i http://localhost:8080/repository/ld4p/$(basename $rt)
  sleep 1
done

sleep 1
curl -i -H "Accept:application/ld+json" http://localhost:8080/repository/ld4p
