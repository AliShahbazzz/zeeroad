<?php

// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode( '/', $uri );
$requestMethod = $_SERVER["REQUEST_METHOD"];

class Database{
  
    // specify your own database credentials
    private $host = "mysql";
    private $db_name = "u697450916_3hbPA";
    private $username = "u697450916_aITic";
    private $password = "Zeeroad@123";
    public $conn;
  
    // get the database connection
    public function getConnection(){
  
        $this->conn = null;
  
        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
            echo "Connected success";

        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }
  
        return $this->conn;
    }
}  
class User{
  
    // database connection and table name
    private $conn;
    private $table_name = "zeeroad_contact";
  
    // object properties
    public $id;
    public $name;
    public $email;
    public $service;
    public $phone;
    public $description;
  
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // // read users
    function read(){
        // select all query
        $query = "SELECT * FROM zeeroad_contact";
        // prepare query statement
        $stmt = $this->conn->prepare($query);
        // execute query
        $stmt->execute();
    
        return $stmt;
    }
    // create user
    function create(){
    
        // query to insert record
        $query = "INSERT INTO
                    " . $this->table_name . "
                SET
                    name=:name, email=:email, description=:description, phone=:phone, service=:service";
    
        // prepare query
        $stmt = $this->conn->prepare($query);
    
        // sanitize
        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->email=htmlspecialchars(strip_tags($this->email));
        $this->description=htmlspecialchars(strip_tags($this->description));
        $this->phone=htmlspecialchars(strip_tags($this->phone));
        $this->service=htmlspecialchars(strip_tags($this->service));
    
        // bind values
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":description", $this->description);
        $stmt->bindParam(":phone", $this->phone);
        $stmt->bindParam(":service", $this->service);
    
        // execute query
        if($stmt->execute()){
            return true;
        }
    
        return false;
        
    }
}
  
// instantiate database and user object
$database = new Database();
$db = $database->getConnection();

// initialize object
$user = new User($db);

// var_dump($res);

function getAllUsers(){
    GLOBAL $user;
    // query users
    $stmt = $user->read();
    $num = $stmt->rowCount();
    
    // check if more than 0 record found
    if($num>0){
    
        // users array
        $users_arr=array();
        $users_arr["records"]=array();
    
        // retrieve our table contents
        // fetch() is faster than fetchAll()
        // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            // extract row
            // this will make $row['name'] to
            // just $name only
            extract($row);
    
            $user_item=array(
                "id" => $id,
                "name" => $name,
                "email" => $email,
                "phone" => $phone,
                "service" => $service,
                "description" => $description
            );
    
            array_push($users_arr["records"], $user_item);
        }
    
        // set response code - 200 OK
        http_response_code(200);
    
        // show users data in json format
        echo json_encode($users_arr);
    }else{
    
        // set response code - 404 Not found
        http_response_code(404);
    
        // tell the user no users found
        echo json_encode(
            array("message" => "No users found.")
        );
    }
}

function createUserFromRequest(){
GLOBAL $user;
// get posted data
$data = json_decode(file_get_contents("php://input"));
  
// make sure data is not empty
if(
    !empty($data->name) &&
    !empty($data->email) &&
    !empty($data->description) &&
    !empty($data->phone) &&
    !empty($data->service)
){
  
    // set user property values
    $user->name = $data->name;
    $user->email = $data->email;
    $user->description = $data->description;
    $user->phone = $data->phone;
    $user->service = $data->service;
  
    // create the user
    if($user->create()){
  
        // set response code - 201 created
        http_response_code(201);
  
        // tell the user
        echo json_encode(array("message" => "User was created."));
    }
  
    // if unable to create the user, tell the user
    else{
  
        // set response code - 503 service unavailable
        http_response_code(503);
  
        // tell the user
        echo json_encode(array("message" => "Unable to create user."));
    }
}
  
// tell the user data is incomplete
else{
  
    // set response code - 400 bad request
    http_response_code(400);
  
    // tell the user
    echo json_encode(array("message" => "Unable to create user. Data is incomplete."));
}
}

Switch ($requestMethod) {
    case 'GET':
        getAllUsers();
        break;
    case 'POST':
        createUserFromRequest();
        break;
    default:
        echo "Invalid Request Type";
        break;
}

?>