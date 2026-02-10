install:
	pip install -r requirements.txt

synth:
	pip install -r requirements.txt
	cdk synth || python3 app.py
