import Anthropic from "@anthropic-ai/sdk";

// Initialize the client
// IMPORTANT: Set your ANTHROPIC_API_KEY environment variable before running
const client = new Anthropic();

async function setupManagedAgent() {
  console.log("🚀 Initializing BrowserUse Agent Setup...");

  try {
    // 1. Create the Managed Agent
    console.log("📝 Creating Agent definition...");
    const agent = await client.beta.agents.create({
      name: "BrowserUse Agent",
      model: "claude-sonnet-4-6", // As specified in your request
      system: "You are BrowserUse Agent, a extract structured data from any website using browser use cloud",
      tools: [
        { 
          type: "agent_toolset_20260401",
          default_config: { enabled: true }
        }
      ],
    });

    console.log(`✅ Agent Created! ID: ${agent.id}`);

    // 2. Create the Environment
    console.log("🌐 Creating Cloud Environment...");
    const environment = await client.beta.environments.create({
      name: "env",
      config: {
        type: "cloud",
        networking: { type: "unrestricted" }
      }
    });

    console.log(`✅ Environment Created! ID: ${environment.id}`);

    console.log("\n--- SETUP COMPLETE ---");
    console.log(`Agent ID: ${agent.id}`);
    console.log(`Environment ID: ${environment.id}`);
    console.log("\nYou can now start a session using these IDs via the API or SDK.");
    
  } catch (error) {
    console.error("❌ Setup Failed:", error.message);
    if (error.message.includes("API key")) {
      console.error("💡 Hint: Ensure you have set the ANTHROPIC_API_KEY environment variable.");
    }
  }
}

setupManagedAgent();
