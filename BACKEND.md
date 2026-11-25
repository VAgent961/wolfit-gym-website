# Wolfit Gym Backend

This project uses Next.js Route Handlers and Neon Postgres for data storage, with Telegram and Email notifications for the business owner.

## Database Schema

### Table: `contact_submissions`
Stores all messages sent via the contact form.
- `id`: Primary key (bigserial)
- `created_at`: Timestamp of submission
- `name`: User's name
- `email`: User's email
- `phone`: User's phone number (optional)
- `message`: The message content
- `status`: 'new', 'done', or 'cancelled' (default: 'new')

## API Routes

### `POST /api/contact`
Handles the contact form submission.
- Validates required fields (name, email, message).
- Saves to the database.
- Sends notifications to the owner via Telegram/Email.
- Returns a WhatsApp link for the user to follow up.

## Admin Panel
The admin panel is located at `/admin`. It is password-protected.
- View the latest 100 contact submissions.
- Mobile-friendly card view for easy reading.

## Environment Variables
The following variables are required for full functionality:

- `DATABASE_URL`: Neon Postgres connection string (set automatically).
- `ADMIN_PASSWORD`: Password for the `/admin` page.
- `ADMIN_SECRET`: Secret for admin session cookies (set automatically).
- `WHATSAPP_NUMBER`: The business WhatsApp number (digits only, e.g., `96170123456`).
- `TELEGRAM_BOT_TOKEN`: (Optional) For Telegram notifications.
- `TELEGRAM_CHAT_ID`: (Optional) For Telegram notifications.
- `RESEND_API_KEY`: (Optional) For Email notifications.
- `NOTIFY_EMAIL`: (Optional) Destination email for notifications.
- `NOTIFY_FROM`: (Optional) Verified sender email in Resend.

## Later
- Customer accounts and login are not part of this version.
- Marking submissions as 'done' in the admin panel.
