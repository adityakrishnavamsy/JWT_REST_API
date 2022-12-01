# JWT_REST_API

When two computers are connected via HTTPS, it is secure to communicate a JWT, which is a string of characters encoded, between them. The token stands for a value that can only be accessed by a computer that has knowledge of the secret key used to encrypt it.
Token-based authentication will be added to an already-existing REST API in this case. JWT is the authentication method in question (JSON Web Token). It's okay if that doesn't provide much information. When I first heard the phrase, it also seemed unusual to me.

![image](https://user-images.githubusercontent.com/46970931/202866763-83e5b36c-ca37-4010-a47c-2c1eb553504f.png)
Proper validation of sent data 
![image](https://user-images.githubusercontent.com/46970931/202866771-e9b53c24-c62d-4cce-90a1-7fae675a9abc.png)
![image](https://user-images.githubusercontent.com/46970931/202866772-84d65752-2bd6-4255-bb61-2c5489737c47.png)
![image](https://user-images.githubusercontent.com/46970931/202866774-f0561be3-e674-4a82-90c2-df464281f475.png)
![image](https://user-images.githubusercontent.com/46970931/202866777-86aa11bc-0a17-4a3c-ac9a-6a3ad780727e.png)
Sending data to mongo db cloud and returning the same.
![image](https://user-images.githubusercontent.com/46970931/202866788-6b8440bf-b889-45ee-8d08-6369d4f55ca9.png)
Divide the code for different functionality for reusability for code.

Take care so that there are no 2 identical emails
![image](https://user-images.githubusercontent.com/46970931/202866810-ae24c8c7-d83b-48de-82a1-f1870abe1ad4.png)
Checks if there are any duplication of mail ids used 
Hashing the password :
For that we are going to use bcrypt js 
![image](https://user-images.githubusercontent.com/46970931/202866823-54804132-1eeb-4dd5-a048-9af5b678602e.png)
Checking if the login validation is light or not
![image](https://user-images.githubusercontent.com/46970931/202866831-387c7f91-21d2-41dc-837f-a2d086487ba3.png)
![image](https://user-images.githubusercontent.com/46970931/202866841-5f8eba33-07c9-4852-b762-623309ed3264.png)
![image](https://user-images.githubusercontent.com/46970931/202866851-3c56c897-36c1-4c4b-ab72-22c5642d4e75.png)
Successful login after decrypting the password 
![image](https://user-images.githubusercontent.com/46970931/202866870-95566f87-daf2-4963-a330-90e61c9c7a6f.png)

Adding jwt  token feature : 
![image](https://user-images.githubusercontent.com/46970931/202866883-d1d6ed5d-57cc-44bf-a721-035870a2fb8f.png)
![image](https://user-images.githubusercontent.com/46970931/202866886-e002ca8e-b9e7-42a6-adcb-a0efaed2d3b5.png)
![image](https://user-images.githubusercontent.com/46970931/202866890-8aedfa1f-10e0-41a2-9ba2-ba95092c2f6c.png)
The jwt token is added to the header 
Taking private routes to verify the token 
![image](https://user-images.githubusercontent.com/46970931/202866904-b66fe7ec-55d5-427b-9315-b9131bdd1b74.png)

Get request for testing our jwt 
![image](https://user-images.githubusercontent.com/46970931/202866916-1ccbf665-f7ec-4b2f-8627-fef9f52318bf.png)
With jwt as the user in not logged in access is denied.
![image](https://user-images.githubusercontent.com/46970931/202866926-7283938f-1a3e-44bc-848f-47f0028c9742.png)
When login as user take the jwt token copy it and then.
We add that token to our header then 
![image](https://user-images.githubusercontent.com/46970931/202866943-3c77eda0-4908-45d0-812b-25aead4aed30.png)
We are able to access the contents from the posts with jwt protection.
With every request now we are also access the user who is keeping that request 


