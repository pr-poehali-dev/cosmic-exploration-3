import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта на почту ekamyshov@yandex.ru"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    district = body.get('district', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Name and phone are required'})
        }

    smtp_user = 'ekamyshov@yandex.ru'
    smtp_password = os.environ['SMTP_PASSWORD']

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта — {name}'
    msg['From'] = smtp_user
    msg['To'] = smtp_user

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 500px; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px;">
        <h2 style="color: #4f46e5; margin-top: 0;">Новая заявка на бурение скважины</h2>
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 140px;">Имя:</td>
                <td style="padding: 8px 0; font-weight: bold; color: #111827;">{name}</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; color: #6b7280;">Телефон:</td>
                <td style="padding: 8px 0; font-weight: bold; color: #111827;">
                    <a href="tel:{phone}" style="color: #4f46e5;">{phone}</a>
                </td>
            </tr>
            <tr>
                <td style="padding: 8px 0; color: #6b7280;">Район МО:</td>
                <td style="padding: 8px 0; font-weight: bold; color: #111827;">{district if district else 'не указан'}</td>
            </tr>
        </table>
        <p style="margin-top: 20px; color: #6b7280; font-size: 13px;">Заявка получена с сайта АкваБур МО</p>
    </div>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, smtp_user, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }