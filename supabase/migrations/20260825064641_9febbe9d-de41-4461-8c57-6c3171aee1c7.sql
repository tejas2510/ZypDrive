REVOKE SELECT, UPDATE, DELETE ON public.contact_messages FROM anon, authenticated;
GRANT INSERT ON public.contact_messages TO anon, authenticated;
GRANT ALL ON public.contact_messages TO service_role;

DROP POLICY IF EXISTS "No client read access to contact messages" ON public.contact_messages;
CREATE POLICY "No client read access to contact messages"
ON public.contact_messages
AS RESTRICTIVE
FOR SELECT
TO anon, authenticated
USING (false);