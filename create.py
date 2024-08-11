def create_product(title):
    url = "https://reviewkhoahoc.net/wp-json/wc/v3/products"
    payload = {
        "name": title,
        "type": "simple",
        "price": "18000",
        "regular_price": "199999",
        "sale_price": "18000"
    }
    header = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic Y2tfNjMxYjcwZWE5OTBlZjEzMmQ0NTMwYjM0OWY3Yzk5Yjk1ODhmMmU2NTpjc18zNjk5YWJlNTcwYWI0MzFhYjM1ODE0NzQ4ODg4NTY3MjY3NGMyZDQx'
    }

    response = requests.post(url, headers=header, json=payload)
    json_data = json.loads(response.text)
    product_id = json_data['id']
    return product_id

def create_course(title, product_id, link_intro):
    url = "https://reviewkhoahoc.net/wp-json/tutor/v1/courses"
    thumbnail_ids = [42498, 42497, 42496, 42495, 42494, 42493, 42492, 42491, 42490, 42489, 42488, 42487, 42486, 42485,
                     42484, 42483, 42482, 42481, 42480, 42479, 42478, 42477, 41296]
    if title.lower().startswith("khóa") and not title.lower().startswith("khóa học"):
        title = title.replace("khóa", "khóa học", 1)
    elif not title.lower().startswith("khóa học"):
        title = 'Khóa học ' + title
    payload = {
        "post_author": 1,
        "post_content": title,
        "post_title": title,
        "post_status": "publish",
        "course_level": "intermediate",
        "thumbnail_id": random.choice(thumbnail_ids),
        "pricing": {
            "type": "paid",
            "product_id": product_id
        }
    }
    if link_intro:
        payload['video'] = {
            "source_type": "external_url",
            "source": link_intro,
        }
    response = requests.post(url, headers=headers, json=payload)
    json_data = json.loads(response.text)
    print(json_data)
    course_id = json_data['data']
    return course_id

def create_topic(course_id, title):
    url = "https://reviewkhoahoc.net/wp-json/tutor/v1/topics"
    payload = {
        "topic_course_id": course_id,
        "topic_title": title,
        "topic_author": 1
    }
    response = requests.post(url, headers=headers, json=payload)
    json_data = json.loads(response.text)
    topic_id = json_data['data']
    return topic_id

def create_lesson_wp_admin(topic_id, title, src, time, mimeType, is_preview):
    url = "https://reviewkhoahoc.net/wp-admin/admin-ajax.php"
    source_embedded = ""
    source_google_drive = ""
    source = ""
    lesson_content = ""
    if mimeType == "video/mp4":
        source = "google_drive"
        source_google_drive = src
    elif mimeType == "application/zip" or mimeType == "application/x-7z-compressed" or mimeType == "application/vnd.rar":
        lesson_content = f'<p><a href=\"{src}\">LINK TẢI</a></p>'
    else:
        source = "embedded"
        source_embedded = src
    if is_preview:
        title = title + ' 👈 HỌC MIỄN PHÍ'
    payload = {
        "_tutor_nonce": "1c4f70e47d",
        "_wp_http_referer": "/wp-admin/admin-ajax.php",
        "action": "tutor_modal_create_or_update_lesson",
        "lesson_id": "",
        "current_topic_id": topic_id,
        "lesson_title": title,
        "tutor_lesson_modal_editor": "",
        "_lesson_thumbnail_id": "",
        "video[source]": source,
        "video[source_video_id]": "",
        "video[poster]": "",
        "video[source_external_url]": "",
        "video[source_shortcode]": "",
        "video[source_youtube]": "",
        "video[source_vimeo]": "",
        "video[source_embedded]": source_embedded,
        "video[source_google_drive]": source_google_drive,
        "video[name_google_drive]": "",
        "video[size_google_drive]": "",
        "video[runtime][hours]": math.floor(time / 3600),
        "video[runtime][minutes]": math.floor((time % 3600) / 60),
        "video[runtime][seconds]": time % 60,
        "lesson_content": lesson_content,
        "is_html_active": "false"
    }
    if is_preview:
        payload['_is_preview'] = 1
    headers = {
        'content-type': 'application/x-www-form-urlencoded',
        'cookie': 'wordpress_sec_71e3ecc1b0e2812d9f0aeb266104e809=nguyendiuhien%7C1816088342%7CFyVssDOabnzXXzoV0ZzemGQyva622qVEMxjhh9GiK9Y%7Cb835acd41c175cc13b6074846d1f3f66b23418901f56648ed38d0b54c8dc88b2; wp-settings-409=editor%3Dtinymce%26libraryContent%3Dbrowse; wp-settings-time-409=1697415316; _ga=GA1.1.1229663736.1697415709; tutor_pn_dont_ask=yes; wp-settings-1=libraryContent%3Dbrowse%26hidetb%3D1%26editor%3Dtinymce%26editor_expand%3Don%26mfold%3Do%26coursecategory_tab%3Dpop%26advImgDetails%3Dhide; wp-settings-time-1=1716728291; mailpoet_page_view=%7B%22timestamp%22%3A1717866946%7D; wordpress_logged_in_71e3ecc1b0e2812d9f0aeb266104e809=nguyendiuhien%7C1816088342%7CFyVssDOabnzXXzoV0ZzemGQyva622qVEMxjhh9GiK9Y%7Cf9186f9df0c08ad3c374dff7658e2b9aa6e1f60ed9980e94d24c134f43ceed3a; tk_ai=woo%3Az6zhraiDhpC%2BXjEciTya7a8H; _ga_S77J9HD4G1=GS1.1.1721740526.189.1.1721741448.47.0.0',

    }

    response = requests.post(url, headers=headers, data=payload)