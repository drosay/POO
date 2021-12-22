class UberCar:
    id = int
    license = str
    driver = str
    passengers = int

    def __init__(self, id, license, driver, passengers):
        self.id = id
        self.license = license
        self.driver = driver
        self.passengers = passengers