from celery import Celery
from celery.schedules import crontab

app = Celery("drokponews")

@app.task
def my_periodic_task():
    # Your periodic task logic here
    from django.http import HttpResponse, JsonResponse
    from selenium import webdriver
    from selenium.webdriver.chrome.options import Options
    from selenium.webdriver.common.by import By

    sites = [
        "https://vot.org/",
        "https://www.rfa.org/tibetan",
        "https: // www.voatibetan.com / Tibet"
        ]
    # Headless method using selenium
    url = 'https://www.voatibetan.com/Tibet'
    # Create an instance of ChromeOptions
    chrome_options = Options()
    # Configure ChromeOptions to run in headless mode
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--window-size=1920x1080')  # Set your desired window size
    user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
    # user_agent = 'Mozilla / 5.0(Macintosh;IntelMacOSX10_15_7) AppleWebKit / 605.1.15(KHTML, likeGecko) Version / 14.0.3Safari / 605.1.15'
    chrome_options.add_argument(f'user-agent={user_agent}')
    # Initialize the WebDriver with the configured ChromeOptions
    driver = webdriver.Chrome(options=chrome_options)
    # Initialize the webdriver (e.g., Chrome)
    # driver = webdriver.Chrome()
    # Navigate to the webpage you want to scrape
    driver.get(url)
    try:
        paragraph_elements = driver.find_elements(By.TAG_NAME, 'h4')
        # print(paragraph_elements.text)
        for h4 in paragraph_elements :
            print(h4.text)
    except:
        print("the scraping failed!")

app.conf.beat_schedule = {
    "my-task": {
        "task": "myapp.tasks.my_periodic_task",
        "schedule": crontab(minute=0, hour=3),  # Run daily at 3:00 AM
    }
}
