import React, { useEffect, useState } from "react";
import { Box, Button, Input, VStack, Heading, Text, HStack, Stack, Avatar, Badge, Select } from "@chakra-ui/react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [fetchMsg, setFetchMsg] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Viewer");
  const [location, setLocation] = useState("");

  const [userId, setUserId] = useState(""); // input for user ID
  const [selectedUser, setSelectedUser] = useState(null); // store fetched user
  const [loadingUser, setLoadingUser] = useState(false); // loading state for single user


  useEffect(() => {
    setLoading(true);
    const getUsers = async () => {

      try{
      // get request for getting all users
      const getRequest = await fetch("http://localhost:5000/users");
      const usersData = await getRequest.json();

      setUsers(usersData);
      }
      catch(err){
        console.error(err);
        setMsg("Error fetching users")
      }
    }
    getUsers();
    setLoading(false);
  }, [])



  const addUser = async () => {
    if (!name || !email || !role || !location) return;
    setLoading(true);

    try{
    //post request sending user data
      const postRequest = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, email, role, location})
    })

    const user = await postRequest.json();

    // Update the users state to trigger rerender
    setUsers([...users, user]);



    // reset useState variable to default values
    setName(""); 
    setEmail("");
    setRole("Viewer");
    setLocation("");
    setMsg("");

    }
    catch(err)
    {
      console.error(err);
      setMsg("Error adding new user");
    }
    setLoading(false);
  };

  const getUserById = async () => {
  if (!userId) return;
  setLoadingUser(true);
  setSelectedUser(null);
  try {
    const res = await fetch(`http://localhost:5000/users/${userId}`);
    if (!res.ok) throw new Error("User not found");
    const data = await res.json();
    setSelectedUser(data);
    setFetchMsg(""); // clear any previous message
    setUserId("")
  } catch (err) {
    console.error(err);
    setFetchMsg("Error fetching user");
  }
  setLoadingUser(false);
};


  return (
    <Box bg="gray.800" color="white" minH="100vh" p={8}>
      {/* Add User Section */}
      <Box maxW="800px" mx="auto" mb={10} p={6} bg="gray.700" borderRadius="md" boxShadow="md">
        <HStack justify="space-between" mb={4}>
          <Heading size="md">Add New User</Heading>
          <Button colorScheme="teal" onClick={addUser}>Add</Button>
        </HStack>
        <Stack spacing={3}>
          <Input 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            bg="gray.600"
          />
          <Input 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            bg="gray.600"
          />
          <Input 
            placeholder="Location" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
            bg="gray.600"
          />
          <Select bg="gray.600" color={"black"} cl value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </Select>

        </Stack>
      </Box>

      {/* Users List Section */}
      <Box maxW="800px" mb={10} mx="auto" p={6} bg="gray.700" borderRadius="md" boxShadow="md">
        <Heading size="md" mb={4}>Users</Heading>
        <VStack spacing={4} align="stretch">
          {loading ? (
            <Text>...loading</Text>
          ) : users.length > 0 ? (
            users.map(user => (
              <HStack key={user.id} p={4} bg="gray.600" borderRadius="md" boxShadow="sm" spacing={4} alignItems="center">
                <Avatar name={user.name} src={`https://via.placeholder.com/150?text=${user.name[0]}`} size="md" />
                <Box flex="1">
                  <Text fontWeight="bold" fontSize="lg">{user.name}</Text>
                  <Text fontSize="sm" color="gray.300">{user.email}</Text>
                  <HStack mt={1} spacing={2}>
                    <Badge colorScheme="green">{user.role}</Badge>
                    <Badge colorScheme="blue">{user.location}</Badge>
                  </HStack>
                </Box>
              </HStack>
            ))
          ) : (
            <Text>You have no users</Text>
          )}
          <Text color={"red"}>{msg}</Text>
        </VStack>
      </Box>

      {/* Get User by ID Section */}
      <Box maxW="800px" mx="auto" mb={10} p={6} bg="gray.700" borderRadius="md" boxShadow="md">
        <Heading size="md" mb={4}>Fetch User by ID</Heading>
        <HStack spacing={3}>
          <Input
            placeholder="Enter User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            bg="gray.600"
          />
          <Button colorScheme="teal" onClick={getUserById}>Fetch User</Button>
        </HStack>

        {loadingUser && <Text mt={3}>Loading user...</Text>}

        {fetchMsg && <Text color="red" mt={3}>{fetchMsg}</Text>}

        {selectedUser && (
          <HStack key={selectedUser.id} p={4} bg="gray.600" borderRadius="md" boxShadow="sm" spacing={4} alignItems="center" mt={3}>
            <Avatar name={selectedUser.name} src={`https://via.placeholder.com/150?text=${selectedUser.name[0]}`} size="md" />
            <Box flex="1">
              <Text fontWeight="bold" fontSize="lg">{selectedUser.name}</Text>
              <Text fontSize="sm" color="gray.300">{selectedUser.email}</Text>
              <HStack mt={1} spacing={2}>
                <Badge colorScheme="green">{selectedUser.role}</Badge>
                <Badge colorScheme="blue">{selectedUser.location}</Badge>
              </HStack>
            </Box>
          </HStack>
        )}
      </Box>

    </Box>
  );
}

export default App;
