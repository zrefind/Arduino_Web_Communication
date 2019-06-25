#define LED 10

void setup() {
  Serial.begin(9600);
  pinMode(LED, OUTPUT);
}

void loop() {
  if (Serial.available()) {
    char c = Serial.read();
    if (c == 'T') {
      digitalWrite(LED, HIGH);
      return;
    }
    if (c == 'F') {
      digitalWrite(LED, LOW);
      return;
    }
  }
}
