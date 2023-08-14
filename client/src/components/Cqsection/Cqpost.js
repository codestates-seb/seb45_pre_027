const PostUrl = "http:localhost:0000";

export const postQuestionToServer = async (questionData) => {
  try {
    const response = await fetch(`${PostUrl}/questions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(questionData),
    });

    if (!response.ok) {
      throw new Error("Error");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
