const PostUrl = "https://bba2-183-102-170-103.ngrok-free.app";

export const postQuestionToServer = async (questionData) => {
  try {
    const response = await fetch(`${PostUrl}/board`, {
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
