CREATE POLICY "No client access to webhook events"
ON public.didit_webhook_events
AS RESTRICTIVE
FOR ALL
TO anon, authenticated
USING (false)
WITH CHECK (false);