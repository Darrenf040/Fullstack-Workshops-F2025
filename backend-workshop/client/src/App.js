import React, { useState } from "react";
import { Box, Button, Input, VStack, Heading, Text, HStack, Stack, Avatar, Badge, Select } from "@chakra-ui/react";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Darren", email: "darren@example.com", role: "Admin", location: "New York" },
    { id: 2, name: "Alice", email: "alice@example.com", role: "Editor", location: "London" },
    { id: 3, name: "Bob", email: "bob@example.com", role: "Viewer", location: "San Francisco" },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Viewer");
  const [location, setLocation] = useState("");

  const addUser = () => {
    if (!name || !email || !role || !location) return;
    setUsers([
      ...users, 
      { 
        id: users.length + 1, 
        name, 
        email, 
        role, 
        location 
      }
    ]);
    setName(""); 
    setEmail("");
    setRole("Viewer");
    setLocation("");
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
      <Box maxW="800px" mx="auto" p={6} bg="gray.700" borderRadius="md" boxShadow="md">
        <Heading size="md" mb={4}>Users</Heading>
        <VStack spacing={4} align="stretch">
          {users.map(user => (
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
          ))}
        </VStack>
      </Box>
    </Box>
  );
}

export default App;
