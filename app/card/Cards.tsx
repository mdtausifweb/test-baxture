"use client"
import { Paper, Avatar, Text, Group, Button, Flex } from '@mantine/core';
import { faAt, faCoffee, faDeleteLeft, faGlobe, faPhone, faStar, faTrash, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const UserCard = ({ user, deleteUser, followUser }: any) => {
    const { name, email, phone, website, id } = user;
    return (
        <Paper shadow="md" p={"sm"} radius="md" withBorder>
            <Group>
                <Avatar src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`} alt="Leanne Graham" radius="50%" size="150px" mx="auto" />
            </Group>
            <Group style={{ display: "flex", justifyContent: "center" }}>
                <Text size="lg" mt="md" >
                    {name} {user.follow ? <FontAwesomeIcon icon={faStar} /> : ""}
                </Text>
            </Group>
            <Group mt="xs">
                <FontAwesomeIcon icon={faAt} />
                <Text component="a" href="mailto:Sincere@april.biz" color="dimmed" size="md">
                    {email}
                </Text>
            </Group>
            <Group mt="xs">
                <FontAwesomeIcon icon={faPhone} />
                <Text component="a" href="tel:1-770-736-8031 x56442" color="dimmed" size="md">
                    {phone}
                </Text>
            </Group>
            <Group mt="xs" py={"xs"}>
                <FontAwesomeIcon icon={faGlobe} />
                <Text component="a" href="https://hildegard.org" color="dimmed" size="md">
                    {website}
                </Text>
            </Group>
            <Flex
                direction={{ base: 'row' }}
                gap={{ base: 'sm' }}
                justify={{ sm: 'center' }}
                py={"2"}
            >
                <Button w={"200"} variant="filled" onClick={() => followUser(id)}>
                    <FontAwesomeIcon icon={faUserPlus} />
                    <Text variant='p ' m={"10"}> Follow</Text>
                </Button>
                <Button w={"200"} variant="outline" color="blue" onClick={() => deleteUser(id)}>
                    <FontAwesomeIcon icon={faTrash} />
                    <Text variant='p' m={"10"}> Delete</Text>
                </Button>
            </Flex>
        </Paper>
    );
};

export default UserCard;
