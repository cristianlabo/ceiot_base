#!/bin/bash
function testPostMeasurements() {
   rm -f measurements.json	
   ../post_measurement.sh 04 18 79 93043.98  > /dev/null 2>&1
   ../get_json_measurements.sh > /dev/null 2>&1
   jq . measurements.json | grep 04 >/dev/null
   assertEquals 0 $?
}

. shunit2
