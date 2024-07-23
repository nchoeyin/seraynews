from django.http import HttpResponse, JsonResponse
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By


# async def getTibetanNewsAPI(request):
#         url = 'https://www.rfa.org/tibetan'
#         # url = 'https://www.rfa.org/english/news/tibet'
#         # Create an instance of ChromeOptions
#         chrome_options = Options()
#         # Configure ChromeOptions to run in headless mode
#         chrome_options.add_argument('--headless')
#         user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
#         # user_agent = 'Mozilla / 5.0(Macintosh;IntelMacOSX10_15_7) AppleWebKit / 605.1.15(KHTML, likeGecko) Version / 14.0.3Safari / 605.1.15'
#         chrome_options.add_argument(f'user-agent={user_agent}')
#         # Initialize the WebDriver with the configured ChromeOptions
#         # driver = webdriver.Chrome(options=chrome_options)
#         # Initialize the webdriver (e.g., Chrome)
#         driver = webdriver.Chrome()
#         # Navigate to the webpage you want to scrape
#         driver.get(url)
#
#
#         # from selenium.webdriver.chrome.options import Options
#         # # Create an instance of ChromeOptions
#         # chrome_options = Options()
#         # # Configure ChromeOptions to run in headless mode
#         # chrome_options.add_argument('--headless')
#         # # Initialize the WebDriver with the configured ChromeOptions
#         # driver = webdriver.Chrome(options=chrome_options)
#         driver.get(url)
#
#         try:
#             # paragraph_elements = driver.find_elements_by_tag_name("p")
#             paragraph_elements = driver.find_elements(By.TAG_NAME, 'span')
#             # print(paragraph_elements.text)
#             tibetan_news = []
#             indexed_tibetan_news = []
#             for paragraph in paragraph_elements:
#                 if paragraph.text != '':
#                     tibetan_news.append(paragraph.text)
#             print(tibetan_news)
#             for i in range(1, len(tibetan_news)):
#                 indexed_tibetan_news.append([f"{i}. {tibetan_news[i]}"])
#                 print(indexed_tibetan_news)
#             news = {'tibetan_news': indexed_tibetan_news}
#             print(f"indexed news: {indexed_tibetan_news}")
#             indexed_tibetan_news.append('tibetans news')
#         except Exception as e:
#             print(f"Error: {e}")
#         # Close the webdriver
#         driver.quit()
#         return JsonResponse({
#             'status': 200,
#             'news' : indexed_tibetan_news
#         }
#         )
# async def getTibetanNewsAPI(request):
#     # Using httpx library
#     import httpx
#     from bs4 import BeautifulSoup
#     url = 'https://www.rfa.org/tibetan'
#     response = httpx.get(url)
#     soup = BeautifulSoup(response.text, 'html.parser')
#     # Find all the span tags in Beautiful Soup object
#     total_spans = soup.find_all('span')
#     # Get the text inside the span tags
#     span_text = [span.text for span in total_spans if len(span.text)>0]
#     spans = span_text
#     print([type(span.text for span in spans)])
#     print(spans)
#     return JsonResponse({
#         'success': True,
#         'news' : ['Pro-China activists harass Tibetan protesters in Hungary during Xi’s visit','']
#     })
sites = [
          "https://vot.org/",
          "https://www.rfa.org/tibetan",
          "https: // www.voatibetan.com / Tibet"
         ]
def getTibetanNewsAPI():
    # Headless method using selenium
    # url = 'https://www.rfa.org/tibetan'
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

    # try:
        # paragraph_elements = driver.find_elements_by_tag_name("p")
    paragraph_elements = driver.find_elements(By.TAG_NAME, 'h4')
    # print(paragraph_elements.text)
    for h4 in paragraph_elements :
        print(h4.text)
    #     tibetan_news = []
    #     indexed_tibetan_news = []
    #     for paragraph in paragraph_elements:
    #         if paragraph.text != '':
    #             tibetan_news.append(paragraph.text)
    #     print(tibetan_news)
    #     for i in range(1, len(tibetan_news)):
    #         indexed_tibetan_news.append([f"{i}. {tibetan_news[i]}"])
    #         print(indexed_tibetan_news)
    #     news = {'tibetan_news': indexed_tibetan_news}
    #     print(f"indexed news: {indexed_tibetan_news}")
    #     indexed_tibetan_news.append('tibetans news')
    # except Exception as e:
    #     print(f"Error: {e}")
    # # Close the webdriver
    # driver.quit()
    # return JsonResponse({
    #     'status': 200,
    #     'news': indexed_tibetan_news
    # }
    # )
getTibetanNewsAPI()

# def getTibetanNewsAPI():
#     Using Beautiful Soup
#     session = requests.Session()
#     response = session.get('https://www.gamefaqs.com', headers={'User-Agent': 'Mozilla/5.0'})
#     page_open = urlopen(response).read()
#     page_content = page_open.decode("utf-8")
#     soup = BeautifulSoup(page_content, "html.parser")
#     # Find all the span tags in Beautiful Soup object
#     total_spans = soup.findall('span')
#     # Get the text inside the span tags
#     span_text = [span.text for span in total_spans if len(span.text)>0]
#     spans = span_text
#     print([type(span.text for span in spans)])
#     print(spans)
#
#     return JsonResponse({
#         'success': True,
#         'news' : ['Pro-China activists harass Tibetan protesters in Hungary during Xi’s visit','']
#     })
#
# getTibetanNewsAPI()

import requests
from bs4 import BeautifulSoup
# async def getTibetanNewsAPI_BBC(request):

