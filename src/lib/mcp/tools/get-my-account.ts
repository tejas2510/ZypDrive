import { defineTool, type ToolContext } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_my_account",
  title: "Get my Zypdrive account",
  description: "Return the signed-in Zypdrive user's basic account info (user id and email).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: (_input, ctx: ToolContext) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const account = {
      user_id: ctx.getUserId(),
      email: ctx.getUserEmail(),
    };
    return {
      content: [{ type: "text", text: JSON.stringify(account, null, 2) }],
      structuredContent: account,
    };
  },
});
