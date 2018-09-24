# -*- coding: cp1252 -*-
import paho.mqtt.client as mqtt
from struct import unpack
from time import sleep

# assinando todas as publicações dentro da area 10
#TOPIC = "area/10/sensor/#"
# TOPIC = "sensor/temperatura/#"
TOPIC = "sensor/temperatura"

# função chamada quando a conexão for realizada, sendo
# então realizada a subscrição
def on_connect(client, data, rc):
    print data
    print rc
    client.subscribe([(TOPIC,0)])

# função chamada quando uma nova mensagem do tópico é gerada
def on_message(client, userdata, msg):
    print msg.payload
    # print msg
    # decodificando o valor recebido
    #v = unpack(">H",msg.payload)[0]
    #print msg.topic + "/" + str(v)

# cria um cliente para supervisão
client = mqtt.Client(client_id = 'SCADA', protocol = mqtt.MQTTv31)

# client = mqtt.Client(client_id = 'SCADA', transport='websockets')

# estabelece as funçõe de conexão e mensagens
client.on_connect = on_connect
client.on_message = on_message

# conecta no broker
client.connect("localhost", 1883)
# client.connect("broker.hivemq.com", 8000)
# client.connect("iot.eclipse.org", 1883)
# client.connect("iot.eclipse.org", 80)
# client.connect("iot.eclipse.org", 1883)

# permace em loop, recebendo mensagens
client.loop_forever()
