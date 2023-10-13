echo
echo "------------------------------------------------"
echo "post_device.sh id dispositivo key"
echo "------------------------------------------------"
echo
./post_device.sh 04 esp32 1234
echo
echo "------------------------------------------------"
echo "post_measurement.sh id t h p"
echo "------------------------------------------------"
echo
./post_measurement.sh 04 18 79 93043.98
echo
echo "------------------------------------------------"
echo "get_color_device.sh id"
echo "------------------------------------------------"
echo
./get_color_device.sh 00
echo
echo "------------------------------------------------"
echo "get_html_device.sh id"
echo "------------------------------------------------"
echo
./get_html_device.sh 00
echo
echo "------------------------------------------------"
echo "get_html_measurements"
echo "------------------------------------------------"
echo
./get_html_measurements.sh
echo
echo "------------------------------------------------"
echo "get_json_devices"
echo "------------------------------------------------"
echo
./get_json_devices.sh
echo
echo "------------------------------------------------"
echo "get_json_measurements"
echo "------------------------------------------------"
echo
./get_json_measurements.sh
echo
