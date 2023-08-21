const PatchUrl = "https://bba2-183-102-170-103.ngrok-free.app";

export const patchQuestionToServer = async (borderId, updatedData) => {
  try {
    const response = await fetch(`${PatchUrl}/board/1`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
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
