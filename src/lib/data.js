// for get all pets with search and filter
export const getPets = async (params) => {
  try {
    let queryString = "";
    if (typeof params === "string") {
      queryString = params.startsWith("?") ? params.slice(1) : params;
    } else if (params instanceof URLSearchParams) {
      queryString = params.toString();
    } else if (params && typeof params === "object") {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, val]) => {
        if (val !== undefined && val !== null && val !== "") {
          searchParams.append(key, val);
        }
      });
      queryString = searchParams.toString();
    }

    const url = queryString
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/pets?${queryString}`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/pets`;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      return [];
    }
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching pets:", error);
    return [];
  }
};

// for featured pets
export const featurePet = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/feature`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching featured pets:", error);
    return [];
  }
};

// for get single pet
export const getPetById = async (petId, token) => {
  try {
    const headers = {};
    if (token) {
      headers.authorization = `Bearer ${token}`;
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/pets/${petId}`, {
      headers,
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching pet by ID:", error);
    return null;
  }
};

// my listing data fetch
export const myListing = async (email) => {
  try {
    if (!email) return [];
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/my-listings/${email}`,
      { cache: "no-store" }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching my listings:", error);
    return [];
  }
};

// edit pet data fetch
export const editPet = async (petId, token, formData) => {
  try {
    const petData = Object.fromEntries(formData.entries());
    const headers = {
      "Content-Type": "application/json",
    };
    if (token) {
      headers.authorization = `Bearer ${token}`;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/pets/${petId}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify(petData),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error editing pet:", error);
    return { success: false, message: error.message };
  }
};

// adoption data fetch
export const adoptionRequest = async (adoptionData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/adoption-request`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adoptionData),
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error submitting adoption request:", error);
    return { success: false, message: error.message };
  }
};

// get adoption request by pet id
export const getAdoptionRequestsByPetId = async (petId) => {
  try {
    if (!petId) return [];
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/adoption-requests/pet/${petId}`,
      { cache: "no-store" }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching adoption requests by pet id:", error);
    return [];
  }
};

// get adoption request by user email
export const getAdoptionRequestByEmail = async (email) => {
  try {
    if (!email) return [];
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/adoption-requests/user/${email}`,
      { cache: "no-store" }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching adoption requests by email:", error);
    return [];
  }
};

// accept or reject adoption request by id
export const updateAdoptionRequestStatus = async (Id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/adoption-request/${Id}`,
      {
        method: "PATCH",
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error updating adoption request status:", error);
    return { success: false, message: error.message };
  }
};
