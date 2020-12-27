#include<SPI.h>
#include<MFRC522.h>
#define SS_PIN 10
#define RST_PIN 9

MFRC522 mfrc522(SS_PIN,RST_PIN);

int incomingByte = 0;
int ledPin = 2;

void setup(){
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
  SPI.begin();
  mfrc522.PCD_Init();
}

void read_rfid() {
  if ( ! mfrc522.PICC_IsNewCardPresent()) {return;}
  if ( ! mfrc522.PICC_ReadCardSerial()) {return;}
//  mfrc522.PICC_DumpToSerial(&(mfrc522.uid));
  for (byte i = 0; i < mfrc522.uid.size; i++) {
    Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? "0" : " ");
    Serial.print(mfrc522.uid.uidByte[i], HEX);
  }
  Serial.println("");  
  mfrc522.PICC_HaltA();  
  mfrc522.PCD_StopCrypto1();
}

void loop(){
  read_rfid();
  while (Serial.available() > 0) {
  // read the incoming byte:
    incomingByte = Serial.read();
    if(incomingByte == 49) { // ASCII printable characters: 49 means number 1
      digitalWrite(ledPin, HIGH);  
    } else if(incomingByte == 48) { // ASCII printable characters: 48 means number 0
      digitalWrite(ledPin, LOW);
    }
  }
}
 
