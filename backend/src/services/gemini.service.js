import { GoogleGenerativeAI }
from "@google/generative-ai";

const genAI =
new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);

const model =
genAI.getGenerativeModel({
    model:"gemini-1.5-flash"
});

export const generateCompatibility =
async(profile,listing)=>{

const prompt = `

Tenant Profile:

Location:
${profile.preferredLocation}

Budget:
${profile.minBudget}
-
${profile.maxBudget}

Lifestyle:
${profile.lifestyle}

Occupation:
${profile.occupation}

Listing:

Location:
${listing.location}

Rent:
${listing.rent}

Room Type:
${listing.roomType}

Return:

{
 "score":85,
 "reason":"..."
}

`;

const result =
await model.generateContent(
prompt
);

return result.response.text();

};