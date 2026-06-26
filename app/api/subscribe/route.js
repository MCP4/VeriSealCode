export async function POST(request) {
  try {
    const { email, useCases = [] } = await request.json();

    if (!email || !email.includes('@')) {
      return Response.json({ error: 'Valid email required' }, { status: 400 });
    }

    // TODO: Integrate with email platform (Klaviyo, Mailchimp, etc.)
    // The useCases array contains the selected use-case IDs for segmentation.
    // Example Klaviyo: POST /api/track with event "Signed Up" + useCases property.
    console.log('[subscribe]', { email, useCases });

    return Response.json({ success: true });
  } catch (err) {
    console.error('Subscribe error:', err);
    return Response.json({ error: 'Subscription failed' }, { status: 500 });
  }
}
