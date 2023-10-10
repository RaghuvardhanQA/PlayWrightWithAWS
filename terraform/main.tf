resource "aws_spot_instance_request" "example" {
  instance_type        = "t2.micro"
  spot_price           = "0.030" # specify your maximum bid price
  wait_for_fulfillment = true    # If you want Terraform to wait until the spot request is fulfilled
  block_duration_minutes = 120   # 2 hours

  ami = data.aws_ami.latest_amazon_linux.id

  tags = {
    Name = "SpotInstance"
  }
}

data "aws_ami" "latest_amazon_linux" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["amzn-ami-hvm-*"]
  }

  filter {
    name   = "root-device-type"
    values = ["ebs"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}