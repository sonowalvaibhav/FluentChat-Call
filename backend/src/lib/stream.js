import {StreamChat} from "stream-chat";
import "dotenv/config";

const apiKey = process.env.CHAT_API_KEY;
const apiSecret = process.env.CHAT_API_SECRET;

if(!apiKey || !apiSecret){
    console.error("Chat API key or secret is missing");
}

const streamClient = StreamChat.getInstance(apiKey,apiSecret);
 export const upsertStreamUser = async (userData)=>{
    try {
        await streamClient.upsertUsers([userData]);
        return userData;
    } catch (error) {
        console.error("Error upserting Stream user:", error);
    }
 };

 export const generateStreamToken = (userId) =>{
  try {
    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr);
  } catch (error) {
     console.error("Error generating Stream token:", error);
  }
 };